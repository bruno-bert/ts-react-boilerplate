import React, { useState, useEffect } from 'react'
import Styles from './login-styles.scss'
import { Footer, LoginHeader, Input, FormStatus } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols'
import { Authentication } from '@/domain/usecases'

type Props = {
  validation: Validation
  authentication: Authentication
}

const Login: React.FC<Props> = ({ validation, authentication }: Props) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    isLoading: false,
    emailError: '',
    passwordError: '',
    mainError: ''
  })

  useEffect(() => {
    setState({
      ...state,
      emailError: validation.validate('email', { email: state.email }),
      passwordError: validation.validate('password', { password: state.password })
    })
  }, [state.email, state.password])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    setState({
      ...state,
      isLoading: true
    })
  }

  return (
    <div className={Styles.login}>

      <LoginHeader />

      <Context.Provider value={{ state, setState }}>

        <form className={Styles.form} onSubmit={handleSubmit}>

          <h2>Login</h2>

          <Input data-testid="email" type="email" name="email" placeholder="Digite seu email"/>

          <Input data-testid="password" type="password" name="password" placeholder="Digite sua senha"/>

          <button data-testid="submit" disabled={!!state.emailError || !!state.passwordError} className={Styles.submit} type="submit">Entrar</button>

          <span className={Styles.link}>Criar Conta</span>

          <FormStatus />

        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
