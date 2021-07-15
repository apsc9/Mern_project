import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Kroshey , the winter store',
  description: 'Home of best self designed sweaters and woollen clothes',
  keywords: 'men clothing , clothing , women clothing , winter clothing',
}

export default Meta