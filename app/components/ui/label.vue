<script setup lang="ts">
import { Label, type LabelProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';

const {
  class: _,
  ...delegatedProps
} = defineProps<LabelProps & { class?: HTMLAttributes['class'] }>();
</script>

<template>
  <Label
    v-bind="delegatedProps"
    :class="
      cn(
        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        $props.class,
      )
    "
  >
    <slot />
  </Label>
</template>
