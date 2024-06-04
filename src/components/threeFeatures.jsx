import {
	Flex,
	Box,
	Text,
	Image,
	Icon,
	Heading,
	SimpleGrid,
	useColorModeValue,
} from '@chakra-ui/react'

const ThreeFeatures = (props) => {
	return (
		<Flex p={0} w="auto" justifyContent="center" alignItems="center">
			<SimpleGrid columns={{ base: 1, md: 2, lg: 3, }} spacing={20} px={{ base: 4, lg: 16, xl: 24, }} py={20} mx="auto" bg="white" >
				{props.features?.map(f => {
					if (f === undefined) {
						return (<></>)
					}
					return (
						<Box>
							{f.icon &&
								<Icon as={f.icon} boxSize={20} objectFit='cover' />
							}
							<Heading as="h3" mb={3} fontSize="lg" lineHeight="shorter" fontWeight="bold" >
								{f.title}
							</Heading>
							<Text as="p" lineHeight="tall" color="gray.600">
								{f.short}
							</Text>
						</Box>
					);
				})}
			</SimpleGrid>
		</Flex>
	);
};

export default ThreeFeatures;
