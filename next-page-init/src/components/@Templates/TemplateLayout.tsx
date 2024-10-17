import { PropsWithChildren } from 'react'

import {Container, ContainerProps, HStack, Tag, Text} from '@chakra-ui/react'

interface TemplateLayoutProps extends ContainerProps {
  title: string
}

const TemplateLayout = ({
  title,
  children,
  ...props
}: PropsWithChildren<TemplateLayoutProps>) => {
  return (
      <Container {...props}>
          <HStack mb={'50px'} />
          <Tag
              background={'background.brand.inverse'}
              color={'text.primary.inverse'}
              textStyle={'pre-heading-05'}
              borderRadius={'999px'}
          >
              {title}
          </Tag>
          <HStack mb={'20px'} />
          {children}
      </Container>
  )
}

export default TemplateLayout
