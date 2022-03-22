import './assets/css/main.scss'
import webpack from './assets/img/webpack.svg'

const img = document.createElement('img')
img.src = webpack
img.alt = 'webpack logo'

document.querySelector('.container').appendChild(img)
