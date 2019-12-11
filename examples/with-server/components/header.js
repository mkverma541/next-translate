import React from 'react'
import Head from 'next/Head'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

export default function Header() {
  const { t, lang } = useTranslation()
  const title = t('common:title')

  return (
    <>
      <Head>
        <title>
          {title} | ({lang.toUpperCase()})
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>{title}</h1>
        {lang !== 'es' && (
          <Link href="/" as="/es">
            <a>Español</a>
          </Link>
        )}
        {lang !== 'ca' && (
          <Link href="/" as="/ca">
            <a>Català</a>
          </Link>
        )}
        {lang !== 'en' && (
          <Link href="/" as="/en">
            <a>English</a>
          </Link>
        )}
      </header>
      <style jsx>
        {`
          header {
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}