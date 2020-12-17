module.exports {
  async headers() {
    return [
      {
        source: '/nested/*',
        headers: [
          {
            key: 'TEST-KEY',
            value: '*', // Matched parameters can be used in the value
          },
          {
            key: 'x-slug-*', // Matched parameters can be used in the key
            value: 'my other custom header value',
          },
        ],
      },
    ],
  }
}