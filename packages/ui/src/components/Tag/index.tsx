import { forwardRef } from 'react'
import { styled } from '@styled-system/jsx'
import { tagRecipe, TagVariantProps } from './tag.recipe'
import { ark } from '@ark-ui/react'
import { CloseOutlineIcon } from '@nation-a/icons'
import { HTMLStyledProps } from '@styled-system/jsx'

export type TagProps = HTMLStyledProps<'div'> &
  Omit<TagVariantProps, 'avatar'> & {
    imageSrc?: string
    text: string
    onDeleteClick?: () => void
  }

const Tag = forwardRef<HTMLDivElement, TagProps>(
  ({ color, background, radius, imageSrc, text, onDeleteClick, ...rest }, ref) => {
    const StyledTag = styled(ark.div, tagRecipe)

    return (
      <StyledTag color={color} background={background} radius={radius} avatar={!!imageSrc} ref={ref} {...rest}>
        {imageSrc && (
          <styled.img
            src={imageSrc}
            css={{
              width: '8',
              height: '8',
              borderRadius: 'full',
              overflow: 'hidden',
            }}
            alt="avatar thumbnail"
          />
        )}
        {text}
        {onDeleteClick ? <CloseOutlineIcon size={12} onClick={onDeleteClick} cursor="pointer" /> : null}
      </StyledTag>
    )
  },
)

Tag.displayName = 'Tag'

export default Tag
