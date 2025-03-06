import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    testTimeout: 8000,
    setupFiles: ['./src/config/vitest.setup.ts'],
    reporters: ['default'],
    coverage: {
      provider: 'v8',
      exclude: [
        './src/config/**',
        './*.config.ts',
        './*.config.js',
        '**/_deprecated/**',
        'node_modules/**',
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/index.ts',
        '**/*.d.ts',
        '**/types.ts',
        '**/*.types.ts',
        'dist/**',
        'html/**',
        '**/docs/**',
        '**.cjs',
        'vite.config.ts',
      ],
      reportsDirectory: 'coverage/',
    },
    exclude: [
      ...configDefaults.exclude,
      './src/config/**',
      '**/_deprecated/**',
      'node_modules/**',
    ],
  },
})
