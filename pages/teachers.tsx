import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const TeachersPage: React.FunctionComponent = () => (
  <Layout title="Home | Kasia school">
    <h1>Teachers</h1>
    <p>This is the Teachers page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default TeachersPage