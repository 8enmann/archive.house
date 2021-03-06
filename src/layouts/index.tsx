import * as React from 'react'
import Link from 'gatsby-link'

const {Helmet} = require('react-helmet')

import './index.css'

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string
  }
  children: any
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  public render() {
    return (
      <div>
        <Helmet
          title="The Archive"
          meta={[
            {name: 'description', content: ''},
            {name: 'keywords', content: ''},
          ]}
        />
        {this.props.children()}
      </div>
    )
  }
}

export default DefaultLayout
