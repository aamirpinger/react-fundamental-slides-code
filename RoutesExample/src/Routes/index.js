import React from 'react'
import CityList from '../Components/CityList/CityList'
import AboutUs from '../Components/AboutUs/AboutUs'

import { Route, Switch } from 'react-router-dom'

function Routes () {
  return (
    <Switch>
      <Route exact path='/' component={CityList} />
      <Route path='/aboutus' component={AboutUs} />
      <Route path='/cityList/:city' component={CityList} />
    </Switch>
  )
}

export default Routes
