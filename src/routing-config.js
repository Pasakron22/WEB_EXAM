import { Home ,President} from './Components'

const routes = [
  {
    'path':'/',
    'component': Home,
    'exact': true
  },
  {
    'path':'/president',
    'component': President,
  },
];
export default routes;
