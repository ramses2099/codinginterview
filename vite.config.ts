import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    exclude: ['packages/template/*','node_modules'],
  },
})