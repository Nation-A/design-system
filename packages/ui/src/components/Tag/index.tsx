import { forwardRef } from 'react'
import { styled } from '@styled-system/jsx'
import { tagRecipe, TagVariantProps } from './tag.recipe'
import { ark, Assign } from '@ark-ui/react'
import { CloseOutlineIcon } from '@nation-a/icons'
import { HTMLStyledProps } from '@styled-system/jsx'
import { css } from '@styled-system/css'

export type TagProps = Assign<HTMLStyledProps<'div'>, TagVariantProps> & {
  imageSrc?: string
  text: string
  onDeleteClick?: () => void
}

const Tag = forwardRef<HTMLDivElement, TagProps>(({ imageSrc, text, onDeleteClick, ...rest }, ref) => {
  const StyledTag = styled(ark.div, tagRecipe)

  return (
    <StyledTag avatar={!!imageSrc} ref={ref} {...rest}>
      {imageSrc ? (
        <styled.img
          src={imageSrc}
          className={css({ borderRadius: 'full', overflow: 'hidden', width: 8, height: 8 })}
          alt="avatar thumbnail"
        />
      ) : null}
      {text}
      {onDeleteClick ? <CloseOutlineIcon size={12} onClick={onDeleteClick} cursor="pointer" /> : null}
    </StyledTag>
  )
})

Tag.displayName = 'Tag'

export default Tag
