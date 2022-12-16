<template>
  <div class="container">
    <div class="grid show">
      <div v-for="col in 12" :key="col" class="cols-1"></div>
    </div>

    <section v-for="(style, index) in styles" :key="index" class="grid">
      <template v-if="style.type === 'caption'">
        <p class="cols-12 sm_cols-6 lg_cols-3 t-caption--1">
          {{ style.title }}
        </p>
        <p
          v-for="num in style.columns"
          :key="index + '-' + num"
          class="cols-12 sm_cols-6 lg_cols-2"
          :class="style.classes"
        >
          {{ generateSentences(1) }}
        </p>
      </template>
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
        {
          name: 'Caption 1',
          classes: 't-overline--1',
          type: 'overline',
          columns: 3,
        },
        {
          name: 'Caption 2',
          classes: 't-overline--2',
          type: 'overline',
          columns: 3,
        },
        {
          name: 'Body 1',
          classes: 't-body--1',
          type: 'body',
        },
        {
          name: 'Body 2',
          classes: 't-body--2',
          type: 'body',
        },
        {
          name: 'Body 3',
          classes: 't-body--3',
          type: 'body',
        },
        {
          name: 'Body 4',
          classes: 't-body--4',
          type: 'body',
        },
        {
          name: 'Headline 1',
          classes: 't-headline--1',
          type: 'headline',
        },
        {
          name: 'Headline 2',
          classes: 't-headline--2',
          type: 'headline',
        },
        {
          name: 'Headline 3',
          classes: 't-headline--3',
          type: 'headline',
        },
        {
          name: 'Headline 4',
          classes: 't-headline--4',
          type: 'headline',
        },
        {
          name: 'Headline 5',
          classes: 't-headline--5',
          type: 'headline',
        },
        {
          name: 'Headline 6',
          classes: 't-headline--6',
          type: 'headline',
        },
        {
          name: 'Display 1',
          classes: 't-display--1',
          type: 'display',
        },
        {
          name: 'Display 2',
          classes: 't-display--2',
          type: 'display',
        },
        {
          name: 'Display 3',
          classes: 't-display--3',
          type: 'display',
        },
        {
          name: 'Display 4',
          classes: 't-display--4',
          type: 'display',
        },
        {
          name: 'Display 5',
          classes: 't-display--5',
          type: 'display',
        },
        {
          name: 'Display 6',
          classes: 't-display--6',
          type: 'display',
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
</style>
