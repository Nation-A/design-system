import { forwardRef, HTMLAttributes } from 'react'
import { styled } from '@styled-system/jsx'
import { tagRecipe, TagVariantProps } from './tag.recipe'
import { ark } from '@ark-ui/react'
import { CloseOutlineIcon } from '../../../../icons/src/components/index'

export type TagProps = HTMLAttributes<HTMLDivElement> &
  TagVariantProps & {
    imageSrc?: string
    text: string
    onDeleteClick?: ()=> void
  }

const Tag = forwardRef<HTMLDivElement, TagProps>(({ imageSrc, text, onDeleteClick, ...rest }, ref) => {
  const StyledTag = styled(ark.div, tagRecipe)

  return (
    <StyledTag avatar={!!imageSrc} ref={ref} {...rest}>
      {imageSrc ? <styled.img src={imageSrc} width={8} height={8} borderRadius='full' overflow='hidden' alt="avatar thumbnail" /> : null}
      {text}
      {onDeleteClick ? <CloseOutlineIcon size={12} onClick={onDeleteClick} cursor='pointer'/>: null}
    </StyledTag>
  )
})

Tag.displayName = 'Tag'

export default Tag
