module.exports = {
  apps: [
    {
      name: 'oleksii-movie-test-task-frontend',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: "production",
        PORT: 3001
      }
    },
  ],
};
