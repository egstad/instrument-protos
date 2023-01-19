<template>
  <div class="container">
    <div class="grid show">
      <div v-for="col in 12" :key="col" class="cols-1"></div>
    </div>

    <!-- <section v-for="(style, index) in styles" :key="index" class="grid">
      <p class="cols-12 lg_cols-3 t-caption--1">
        {{ style.name }}
      </p>
      <p
        v-for="num in style.columns"
        :key="index + '-' + num"
        class="cols-12 sm_cols-6 lg_cols-3"
        :class="style.classes"
      >
        {{ generateSentences(1) }}
      </p>
    </section> -->

    <section class="grid spaced-items">
      <p class="t-headline--2 cols-8 xl_cols-4">
        <!-- <span>Hamburgefontsiv</span> -->
        <span>{{ generateTitle(2) }}</span>
      </p>
      <p
        class="t-body--1 cols-4 xl_cols-3"
        style="margin-top: calc(var(--space-8) * -0.5)"
      >
        <!-- <span>Hamburgefontsiv</span> -->
        <span>{{ generateSentences(1) }}</span>
      </p>
      <p
        class="t-body--1 cols-4 xl_cols-3"
        style="margin-top: calc(var(--space-8) * -0.5)"
      >
        <!-- <span>Hamburgefontsiv</span> -->
        <span>{{ generateSentences(1) }}</span>
      </p>
      <p class="t-caption--1 cols-4 xl_cols-1 xl_cols-start-12">
        <!-- <span>Hamburgefontsiv</span> -->
        <span>{{ generateSentences(1) }}</span>
      </p>
    </section>

    <hr />

    <section v-for="(style, index) in styles" :key="index" class="grid">
      <p class="t-caption--1" style="padding-bottom: var(--space-16)">
        {{ style.name }}
      </p>
      <p :class="style.classes" class="cols-12">
        <!-- <span>Hamburgefontsiv</span> -->
        <span>{{ generateSentences(1) }}</span>
      </p>
    </section>
  </div>
</template>

<script>
import { LoremIpsum } from 'lorem-ipsum'

export default {
  data() {
    return {
      styles: [
        {
          name: 'Caption 1',
          classes: 't-caption--1',
          type: 'caption',
          columns: 3,
        },
        {
          name: 'Caption 2',
          classes: 't-caption--2',
          type: 'caption',
          columns: 3,
        },
        // {
        //   name: 'Overline 1',
        //   classes: 't-overline--1',
        //   type: 'overline',
        //   columns: 3,
        // },
        // {
        //   name: 'Overline 2',
        //   classes: 't-overline--2',
        //   type: 'overline',
        //   columns: 3,
        // },
        {
          name: 'Body 1',
          classes: 't-body--1',
          type: 'body',
          columns: 2,
        },
        {
          name: 'Body 2',
          classes: 't-body--2',
          type: 'body',
          columns: 2,
        },
        {
          name: 'Body 3',
          classes: 't-body--3',
          type: 'body',
          columns: 2,
        },
        {
          name: 'Body 4',
          classes: 't-body--4',
          type: 'body',
          columns: 2,
        },
        {
          name: 'Headline 1',
          classes: 't-headline--1',
          type: 'headline',
          columns: 2,
        },
        {
          name: 'Headline 2',
          classes: 't-headline--2',
          type: 'headline',
          columns: 2,
        },
        {
          name: 'Headline 3',
          classes: 't-headline--3',
          type: 'headline',
          columns: 2,
        },
        {
          name: 'Headline 4',
          classes: 't-headline--4',
          type: 'headline',
          columns: 1,
        },
        {
          name: 'Headline 5',
          classes: 't-headline--5',
          type: 'headline',
          columns: 1,
        },
        {
          name: 'Headline 6',
          classes: 't-headline--6',
          type: 'headline',
          columns: 1,
        },
      ],
    }
  },
  methods: {
    generateSentences(numOfSentences) {
      const lorem = new LoremIpsum({
        sentencesPerParagraph: {
          max: 8,
          min: 4,
        },
        wordsPerSentence: {
          max: 16,
          min: 8,
        },
      })

      return lorem.generateParagraphs(numOfSentences)
    },
    generateTitle(numOfSentences) {
      const lorem = new LoremIpsum({
        sentencesPerParagraph: {
          max: 2,
          min: 1,
        },
        wordsPerSentence: {
          max: 16,
          min: 6,
        },
      })

      return lorem.generateParagraphs(numOfSentences)
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding: 100px 0;
}

.grid.show {
  .cols-1 {
    background: red;
    padding-top: 100%;
  }
}

.spaced-items > * {
  margin-bottom: var(--space-32);
  padding-right: var(--space-16);
}
</style>
