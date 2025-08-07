import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <div className="homepage">
      <div className="content">
        <div className="logo-section">
          <h1 className="company-name">1438 Holdings</h1>
          <div className="company-details">
            <span className="company-type">Sdn. Bhd.</span>
            <span className="separator">•</span>
            <span className="company-location">Malaysia</span>
          </div>
        </div>
      </div>
    </div>
  )
})

export default app
