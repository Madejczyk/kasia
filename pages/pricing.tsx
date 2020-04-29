import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const PricingPage: React.FunctionComponent = () => (
  <Layout title="Pricing | Kasia school">
    <h1>Pricing</h1>
    <p>This is the Pricing page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default PricingPage
