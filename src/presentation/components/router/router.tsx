import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login } from '@/presentation/pages'

import { ValidationComposite, ValidationBuilder as Builder } from '@/validation/validators'

import { RemoteAuthentication } from '@/data/usecases'
import { Authentication } from '@/domain/usecases'

import { AxiosHttpClient } from '@/infra/http'

const makeAxiosHttpClient = (): AxiosHttpClient => new AxiosHttpClient()

const makeApiUrl = (path: string): string => `${process.env.API_URL}${path}`

const makeRemoteAuthentication = (): Authentication =>
  new RemoteAuthentication(makeApiUrl('/login'), makeAxiosHttpClient())

export const makeLoginValidation = (): ValidationComposite => ValidationComposite.build([
  ...Builder.field('email').required().email().build(),
  ...Builder.field('password').required().min(5).build()
])

const makeLogin: React.FC = () => {
  return (
    <Login
      authentication={makeRemoteAuthentication()}
      validation={makeLoginValidation()}
    />
  )
}

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={makeLogin}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
