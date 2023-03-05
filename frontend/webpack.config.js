module.exports = {
    /* ... */
    module: {
      rules: [
        // Videos
        {
          test: /\.(?:mp4|avi)$/i,
          type: 'asset/resource',
        },
      ],
    },
  }