import React from 'react'

const UrlContext = React.createContext()

const UrlProvider = UrlContext.Provider
const UrlConsumer = UrlProvider.Consumer

export { UrlProvider, UrlConsumer }