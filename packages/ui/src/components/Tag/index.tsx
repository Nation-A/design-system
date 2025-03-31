import { ButtonHTMLAttributes, forwardRef } from 'react'
import { styled } from '@styled-system/jsx'
import { tagRecipe, TagVariantProps } from './tag.recipe'
import { ark } from '@ark-ui/react'
import { CloseOutlineIcon } from '../../../../icons/src/components/index'

export type TagProps = ButtonHTMLAttributes<HTMLDivElement> &
  TagVariantProps & {
    imageSrc?: string
    text: string
    onDeleteClick: ()=> void
  }

const Tag = forwardRef<HTMLDivElement, TagProps>(({ color, background, radius, imageSrc, text, onDeleteClick, ...rest }, ref) => {
  const StyledTag = styled(ark.div, tagRecipe)

  return (
    <StyledTag color={color} background={background} radius={radius} avatar={!!imageSrc} ref={ref} {...rest}>
      {imageSrc ? <img src={imageSrc} width={32} height={32} alt="avatar thumbnail" /> : null}
      {text}
      <CloseOutlineIcon size={12} onClick={onDeleteClick} cursor='pointer'/>
    </StyledTag>
  )
})

Tag.displayName = 'Tag'

export default Tag
