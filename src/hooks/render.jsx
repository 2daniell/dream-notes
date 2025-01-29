import { h, render } from 'preact'
import { App } from '../app'

export function RenderDOM() {
    render(<App />, document.getElementById('app'))
}

document.addEventListener('DOMContentLoaded', RenderDOM)