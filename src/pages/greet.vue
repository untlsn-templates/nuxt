<script lang="ts">
import * as v from 'valibot';

const FormSchema = v.object({
  name: v.pipe(v.string(), v.nonEmpty('Pole wymagane')),
});
</script>

<script setup lang="ts">
const { handleSubmit, defineField, errors } = useForm({
  initialValues: { name: '' },
  validationSchema: toTypedSchema(FormSchema),
});

const [name, nameAttrs] = defineField('name');

const { $trpc } = useNuxtApp();
const welcomeMutation = $trpc.welcome.useMutation();
const submit = handleSubmit((values) => {
  welcomeMutation.mutate({ name: values.name });
});
</script>

<template>
  <main class="min-h-screen content-center justify-items-center">
    <form
      class="border-2 rounded-md min-size-100 p-4 shadow flex flex-col"
      @submit.prevent="submit"
    >
      <h1 class="text-2xl font-bold">
        Greet form
      </h1>
      <p class="text-muted-foreground mb-8">
        Spell your name, so we can greet you!
      </p>
      <UiLabel for="name">
        Your name
      </UiLabel>
      <UiInput
        id="name"
        v-model="name"
        v-bind="nameAttrs"
      />
      <UiLabel
        for="name"
        class="text-destructive"
      >
        {{ errors.name }}
      </UiLabel>
      <div class="mt-2 text-center">
        <UiButton
          class="w-full disabled:before:(c_ i-line-md-loading-twotone-loop mr-2)"
          :disabled="welcomeMutation.status.value == 'pending'"
        >
          Send
        </UiButton>
      </div>
      <div class="flex-1 content-center text-center text-2xl font-bold">
        {{ welcomeMutation.data.value?.greeting }}
      </div>
    </form>
  </main>
</template>
