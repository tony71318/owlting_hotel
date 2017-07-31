import App from '../App'

export default [{
  path: '/',
  component: App,
  children: [{
    path: '/',
    component: r => require.ensure([], () => r(require('../page/hello')), 'hello')
  }, {
    path: '/hello',
    component: r => require.ensure([], () => r(require('../page/hello')), 'hello')
  }, {
    path: '/counter',
    component: r => require.ensure([], () => r(require('../page/counter')), 'counter')
  }, {
    path: '/manage',
    component: r => require.ensure([], () => r(require('../page/manage')), 'manage')
  }, {
    path: '/checkout',
    component: r => require.ensure([], () => r(require('../page/checkout')), 'checkout')
  }, {
    path: '/checkin',
    component: r => require.ensure([], () => r(require('../page/checkin')), 'checkin')
  }, {
    path: '/sell',
    component: r => require.ensure([], () => r(require('../page/sell')), 'sell')
  }, {
    path: '/empty',
    component: r => require.ensure([], () => r(require('../page/empty')), 'empty')
  }, {
    path: '/room_type',
    component: r => require.ensure([], () => r(require('../page/room_type')), 'room_type')
  }]
}]
