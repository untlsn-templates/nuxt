import * as v from 'valibot';
import { publicProcedure, router } from '../trpc';

export const appRouter = router({
  welcome: publicProcedure
    .input(
      v.parser(
        v.object({
          name: v.string(),
        }),
      ),
    )
    .mutation(({ input }) => {
      return {
        greeting: `Hello ${input?.name}`,
      };
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
