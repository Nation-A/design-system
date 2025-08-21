import { RecipeVariantProps, cva } from '@styled-system/css'

export type TextVariantProps = RecipeVariantProps<typeof textRecipe>

export const textRecipe = cva({
  base: {
    color: 'currentcolor',
  },
  defaultVariants: {
    variant: 'body.md',
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
      'en.title.main.22.bold': {
        textStyle: 'en.title.main.22.bold',
        fontFamily: 'freeman',
      },
      'en.title.main.24.bold': {
        textStyle: 'en.title.main.24.bold',
        fontFamily: 'freeman',
      },
      'en.title.main.30.bold': {
        textStyle: 'en.title.main.30.bold',
        fontFamily: 'freeman',
      },
      'en.title.main.56.bold': {
        textStyle: 'en.title.main.56.bold',
        fontFamily: 'freeman',
      },
      'en.title.sub.16.bold': {
        textStyle: 'en.title.sub.16.bold',
        fontFamily: 'freeman',
      },
      'en.title.sub.18.bold': {
        textStyle: 'en.title.sub.18.bold',
        fontFamily: 'freeman',
      },
      'en.title.sub.20.bold': {
        textStyle: 'en.title.sub.20.bold',
        fontFamily: 'freeman',
      },
      'en.text.chat.14.bold': {
        textStyle: 'en.text.chat.14.bold',
        fontFamily: 'dmSans',
      },
      'en.text.chat.14.regular': {
        textStyle: 'en.text.chat.14.regular',
        fontFamily: 'dmSans',
      },
      'en.text.chat.16.bold': {
        textStyle: 'en.text.chat.16.bold',
        fontFamily: 'dmSans',
      },
      'en.text.chat.16.regular': {
        textStyle: 'en.text.chat.16.regular',
        fontFamily: 'dmSans',
      },
      'en.text.body.14.bold': {
        textStyle: 'en.text.body.14.bold',
        fontFamily: 'dmSans',
      },
      'en.text.body.14.regular': {
        textStyle: 'en.text.body.14.regular',
        fontFamily: 'dmSans',
      },
      'en.text.body.16.bold': {
        textStyle: 'en.text.body.16.bold',
        fontFamily: 'dmSans',
      },
      'en.text.body.16.regular': {
        textStyle: 'en.text.body.16.regular',
        fontFamily: 'dmSans',
      },
      'en.label.caption.10.semibold': {
        textStyle: 'en.label.caption.10.semibold',
        fontFamily: 'dmSans',
      },
      'en.label.caption.12.semibold': {
        textStyle: 'en.label.caption.12.semibold',
        fontFamily: 'dmSans',
      },
      'en.label.caption.14.semibold': {
        textStyle: 'en.label.caption.14.semibold',
        fontFamily: 'dmSans',
      },
      'kr.title.main.22.bold': {
        textStyle: 'kr.title.main.22.bold',
        fontFamily: 'pretendard',
      },
      'kr.title.main.24.bold': {
        textStyle: 'kr.title.main.24.bold',
        fontFamily: 'pretendard',
      },
      'kr.title.main.30.bold': {
        textStyle: 'kr.title.main.30.bold',
        fontFamily: 'pretendard',
      },
      'kr.title.main.56.bold': {
        textStyle: 'kr.title.main.56.bold',
        fontFamily: 'pretendard',
      },
      'kr.title.sub.16.bold': {
        textStyle: 'kr.title.sub.16.bold',
        fontFamily: 'pretendard',
      },
      'kr.title.sub.18.bold': {
        textStyle: 'kr.title.sub.18.bold',
        fontFamily: 'pretendard',
      },
      'kr.title.sub.20.bold': {
        textStyle: 'kr.title.sub.20.bold',
        fontFamily: 'pretendard',
      },
      'kr.text.chat.14.bold': {
        textStyle: 'kr.text.chat.14.bold',
        fontFamily: 'pretendard',
      },
      'kr.text.chat.14.regular': {
        textStyle: 'kr.text.chat.14.regular',
        fontFamily: 'pretendard',
      },
      'kr.text.chat.16.bold': {
        textStyle: 'kr.text.chat.16.bold',
        fontFamily: 'pretendard',
      },
      'kr.text.chat.16.regular': {
        textStyle: 'kr.text.chat.16.regular',
        fontFamily: 'pretendard',
      },
      'kr.text.body.14.bold': {
        textStyle: 'kr.text.body.14.bold',
        fontFamily: 'pretendard',
      },
      'kr.text.body.14.regular': {
        textStyle: 'kr.text.body.14.regular',
        fontFamily: 'pretendard',
      },
      'kr.text.body.16.bold': {
        textStyle: 'kr.text.body.16.bold',
        fontFamily: 'pretendard',
      },
      'kr.text.body.16.regular': {
        textStyle: 'kr.text.body.16.regular',
        fontFamily: 'pretendard',
      },
      'kr.label.caption.10.semibold': {
        textStyle: 'kr.label.caption.10.semibold',
        fontFamily: 'pretendard',
      },
      'kr.label.caption.12.semibold': {
        textStyle: 'kr.label.caption.12.semibold',
        fontFamily: 'pretendard',
      },
      'kr.label.caption.14.semibold': {
        textStyle: 'kr.label.caption.14.semibold',
        fontFamily: 'pretendard',
      },
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
})
