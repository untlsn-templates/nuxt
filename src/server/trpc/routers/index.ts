import * as v from 'valibot';
import { publicProcedure, router } from '../trpc';

export const appRouter = router({
  welcome: publicProcedure
    .input(
      v.parser(
        v.object({
          text: v.nullish(v.string()),
        }),
      ),
    )
    .query(({ input }) => {
      return {
        greeting: `Welcome to ${input?.text ?? 'Nuxt'}`,
      };
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
