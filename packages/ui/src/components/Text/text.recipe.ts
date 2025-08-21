import { RecipeVariantProps, cva } from '@styled-system/css'

export type TextVariantProps = RecipeVariantProps<typeof textRecipe>

export const textRecipe = cva({
  base: {
    color: 'currentcolor',
  },
  defaultVariants: {
    variant: 'body.md',
    language: 'en',
  },
  variants: {
    variant: {
      'display.lg': {
        textStyle: 'display.lg',
        fontFamily: 'inter',
      },
      'display.md': {
        textStyle: 'display.md',
        fontFamily: 'inter',
      },
      'headline.md': {
        textStyle: 'headline.md',
        fontFamily: 'inter',
      },
      'headline.sm': {
        textStyle: 'headline.sm',
        fontFamily: 'inter',
      },
      'title.lg': {
        textStyle: 'title.lg',
        fontFamily: 'notoSans',
      },
      'title.md': {
        textStyle: 'title.md',
        fontFamily: 'notoSans',
      },
      'title.sm': {
        textStyle: 'title.sm',
        fontFamily: 'notoSans',
      },
      'body.lg': {
        textStyle: 'body.lg',
        fontFamily: 'notoSans',
      },
      'body.md': {
        textStyle: 'body.md',
        fontFamily: 'notoSans',
      },
      'body.sm': {
        textStyle: 'body.sm',
        fontFamily: 'notoSans',
      },
      'label.sm': {
        textStyle: 'label.sm',
        fontFamily: 'notoSans',
      },
      'label.md': {
        textStyle: 'label.md',
        fontFamily: 'notoSans',
      },
      'title.main.22.bold': {},
      'title.main.24.bold': {},
      'title.main.30.bold': {},
      'title.main.56.bold': {},
      'title.sub.16.bold': {},
      'title.sub.18.bold': {},
      'title.sub.20.bold': {},
      'text.chat.14.bold': {},
      'text.chat.14.regular': {},
      'text.chat.16.bold': {},
      'text.chat.16.regular': {},
      'text.body.14.bold': {},
      'text.body.14.regular': {},
      'text.body.16.bold': {},
      'text.body.16.regular': {},
      'label.caption.10.semibold': {},
      'label.caption.12.semibold': {},
      'label.caption.14.semibold': {},
    },
    language: {
      en: {},
      ko: {},
    },
    font: {
      inter: {
        fontFamily: 'inter',
      },
      notoSans: {
        fontFamily: 'notoSans',
      },
      dmSans: {
        fontFamily: 'dmSans',
      },
      pretendard: {
        fontFamily: 'pretendard',
      },
      freeman: {
        fontFamily: 'freeman',
      },
    },
  },
  compoundVariants: [
    {
      variant: 'title.main.22.bold',
      language: 'en',
      css: {
        textStyle: 'en.title.main.22.bold',
        fontFamily: 'freeman',
      },
    },
    {
      variant: 'title.main.24.bold',
      language: 'en',
      css: {
        textStyle: 'en.title.main.24.bold',
        fontFamily: 'freeman',
      },
    },
    {
      variant: 'title.main.30.bold',
      language: 'en',
      css: {
        textStyle: 'en.title.main.30.bold',
        fontFamily: 'freeman',
      },
    },
    {
      variant: 'title.main.56.bold',
      language: 'en',
      css: {
        textStyle: 'en.title.main.56.bold',
        fontFamily: 'freeman',
      },
    },
    {
      variant: 'title.sub.16.bold',
      language: 'en',
      css: {
        textStyle: 'en.title.sub.16.bold',
        fontFamily: 'freeman',
      },
    },
    {
      variant: 'title.sub.18.bold',
      language: 'en',
      css: {
        textStyle: 'en.title.sub.18.bold',
        fontFamily: 'freeman',
      },
    },
    {
      variant: 'title.sub.20.bold',
      language: 'en',
      css: {
        textStyle: 'en.title.sub.20.bold',
        fontFamily: 'freeman',
      },
    },
    {
      variant: 'text.chat.14.bold',
      language: 'en',
      css: {
        textStyle: 'en.text.chat.14.bold',
        fontFamily: 'dmSans',
      },
    },
    {
      variant: 'text.chat.14.regular',
      language: 'en',
      css: {
        textStyle: 'en.text.chat.14.regular',
        fontFamily: 'dmSans',
      },
    },
    {
      variant: 'text.chat.16.bold',
      language: 'en',
      css: {
        textStyle: 'en.text.chat.16.bold',
        fontFamily: 'dmSans',
      },
    },
    {
      variant: 'text.chat.16.regular',
      language: 'en',
      css: {
        textStyle: 'en.text.chat.16.regular',
        fontFamily: 'dmSans',
      },
    },
    {
      variant: 'text.body.14.bold',
      language: 'en',
      css: {
        textStyle: 'en.text.body.14.bold',
        fontFamily: 'dmSans',
      },
    },
    {
      variant: 'text.body.14.regular',
      language: 'en',
      css: {
        textStyle: 'en.text.body.14.regular',
        fontFamily: 'dmSans',
      },
    },
    {
      variant: 'text.body.16.bold',
      language: 'en',
      css: {
        textStyle: 'en.text.body.16.bold',
        fontFamily: 'dmSans',
      },
    },
    {
      variant: 'text.body.16.regular',
      language: 'en',
      css: {
        textStyle: 'en.text.body.16.regular',
        fontFamily: 'dmSans',
      },
    },
    {
      variant: 'label.caption.10.semibold',
      language: 'en',
      css: {
        textStyle: 'en.label.caption.10.semibold',
        fontFamily: 'dmSans',
      },
    },
    {
      variant: 'label.caption.12.semibold',
      language: 'en',
      css: {
        textStyle: 'en.label.caption.12.semibold',
        fontFamily: 'dmSans',
      },
    },
    {
      variant: 'label.caption.14.semibold',
      language: 'en',
      css: {
        textStyle: 'en.label.caption.14.semibold',
        fontFamily: 'dmSans',
      },
    },
    {
      variant: 'title.main.22.bold',
      language: 'ko',
      css: {
        textStyle: 'kr.title.main.22.bold',
        fontFamily: 'pretendard',
      },
    },
    {
      variant: 'title.main.24.bold',
      language: 'ko',
      css: {
        textStyle: 'kr.title.main.24.bold',
        fontFamily: 'pretendard',
      },
    },
    {
      variant: 'title.main.30.bold',
      language: 'ko',
      css: {
        textStyle: 'kr.title.main.30.bold',
        fontFamily: 'pretendard',
      },
    },
    {
      variant: 'title.main.56.bold',
      language: 'ko',
      css: {
        textStyle: 'kr.title.main.56.bold',
        fontFamily: 'pretendard',
      },
    },
    {
      variant: 'title.sub.16.bold',
      language: 'ko',
      css: {
        textStyle: 'kr.title.sub.16.bold',
        fontFamily: 'pretendard',
      },
    },
    {
      variant: 'title.sub.18.bold',
      language: 'ko',
      css: {
        textStyle: 'kr.title.sub.18.bold',
        fontFamily: 'pretendard',
      },
    },
    {
      variant: 'title.sub.20.bold',
      language: 'ko',
      css: {
        textStyle: 'kr.title.sub.20.bold',
        fontFamily: 'pretendard',
      },
    },
    {
      variant: 'text.chat.14.bold',
      language: 'ko',
      css: {
        textStyle: 'kr.text.chat.14.bold',
        fontFamily: 'pretendard',
      },
    },
    {
      variant: 'text.chat.14.regular',
      language: 'ko',
      css: {
        textStyle: 'kr.text.chat.14.regular',
        fontFamily: 'pretendard',
      },
    },
    {
      variant: 'text.chat.16.bold',
      language: 'ko',
      css: {
        textStyle: 'kr.text.chat.16.bold',
        fontFamily: 'pretendard',
      },
    },
    {
      variant: 'text.chat.16.regular',
      language: 'ko',
      css: {
        textStyle: 'kr.text.chat.16.regular',
        fontFamily: 'pretendard',
      },
    },
    {
      variant: 'text.body.14.bold',
      language: 'ko',
      css: {
        textStyle: 'kr.text.body.14.bold',
        fontFamily: 'pretendard',
      },
    },
    {
      variant: 'text.body.14.regular',
      language: 'ko',
      css: {
        textStyle: 'kr.text.body.14.regular',
        fontFamily: 'pretendard',
      },
    },
    {
      variant: 'text.body.16.bold',
      language: 'ko',
      css: {
        textStyle: 'kr.text.body.16.bold',
        fontFamily: 'pretendard',
      },
    },
    {
      variant: 'text.body.16.regular',
      language: 'ko',
      css: {
        textStyle: 'kr.text.body.16.regular',
        fontFamily: 'pretendard',
      },
    },
    {
      variant: 'label.caption.10.semibold',
      language: 'ko',
      css: {
        textStyle: 'kr.label.caption.10.semibold',
        fontFamily: 'pretendard',
      },
    },
    {
      variant: 'label.caption.12.semibold',
      language: 'ko',
      css: {
        textStyle: 'kr.label.caption.12.semibold',
        fontFamily: 'pretendard',
      },
    },
    {
      variant: 'label.caption.14.semibold',
      language: 'ko',
      css: {
        textStyle: 'kr.label.caption.14.semibold',
        fontFamily: 'pretendard',
      },
    },
  ],
})
