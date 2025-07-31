# Zod Bugs Reproduction Package

This package contains reproduction scripts for zod compatibility issues with the OpenAI Agents SDK.

## Issue Background

Starting from zod version 3.25.68, TypeScript compilation fails when using zod schemas with the OpenAI Agents SDK. This is a known issue tracked at:

- Zod Issue: https://github.com/colinhacks/zod/issues/4903
- Related Zod Issue: https://github.com/colinhacks/zod/issues/4984
- OpenAI Agents Issue: https://github.com/openai/openai-agents-js/issues/187

## Error Messages

The compilation fails with these specific errors:

- "Types have separate declarations of a private property '\_cached'"
- "Type instantiation is excessively deep and possibly infinite"

## Scripts

```bash
# Test with working version (zod@3.25.67)
pnpm run test:working-version

# Test with failing version (zod@3.25.68)
pnpm run test:failing-version
```

## Reproduction Steps

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Run the reproduction with the failing version:

   ```bash
   pnpm run test:failing-version
   ```

3. The TypeScript compilation will hang/timeout due to infinite type instantiation, demonstrating the bug.

4. To see it working with the older version:
   ```bash
   pnpm run test:working-version
   ```

## Expected Results

- **With zod@3.25.67**: Compilation succeeds without errors
- **With zod@3.25.68**: Compilation hangs/times out due to "Type instantiation is excessively deep and possibly infinite"
