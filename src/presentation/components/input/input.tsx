import React, { useContext } from 'react'
import Styles from './input-styles.scss'
import Context from '@/presentation/contexts/form/form-context'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context)
  const error = state[`${props.name}Error`]

  /** hack - removes autofill input in Google Chrome */
  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  const getStatus = (): string => {
    return error ? '\u{1F534}' : '\u{1F7E2}'
  }

  const getTitle = (): string => {
    return error || 'ok'
  }

  return (
    <div className={Styles.inputWrap}>
      <input data-testid={props.name} {...props} readOnly onFocus={enableInput} onChange={handleChange}/>
      <span data-testid={`${props.name}-status`} title={getTitle()} className={Styles.inputStatus}>{getStatus()}</span>
    </div>
  )
}

export default Input
