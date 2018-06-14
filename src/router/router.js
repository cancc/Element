import Vue from 'vue'
import Router from 'vue-router'
import PageOne from '../components/pageOne'
import PageTwo from '../components/pageTwo'
import Form from '../components/form'
import Container from '../components/container'
import Icon from '../components/icon'


const routes = [
    {
       path: '/pageOne',
      component: PageOne
    },{
       path: '/pageTwo',
      component: PageTwo
    },{
       path: '/form',
      component: Form
    },{
      path: '/container',
      component: Container
    },{
      path: '/icon',
      component: Icon
    }
]
    


export default routes
