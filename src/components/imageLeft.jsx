import React from "react";

import {
	Stack,
	Flex,
	Box,
	Image,
	Text,
	Heading,
	Link,
	useColorModeValue,
} from '@chakra-ui/react'

const ImageLeft = (props) => {
	return (

		<Flex direction={{ base: "column", md: "row", }} px={8} py={24} mx="auto">

			<Box w={{ base: "full", md: 10 / 12, }} mx="auto" textAlign="center">
				<Image w="full" rounded="lg" shadow="2xl" src="https://kutty.netlify.app/hero.jpg" alt="Big Image" />
			</Box>

			<Box w={{ base: "full", md: 11 / 12, xl: 9 / 12, }} mx="auto" pl={{ md: 50, }}>

				<Heading as="h2" fontSize={{ base: "3xl", sm: "4xl", }} fontWeight="extrabold" lineHeight="shorter" mb={6}>
					<Text as="span" display="block">Ready to dive in?</Text>
					<Text as="span" display="block" >
						Start your free trial today.
					</Text>
				</Heading>

				< Text as="span" mb={6} fontSize={{ base: "lg", md: "xl", }} >
					Hellonext is a feature voting software where you can allow your users to
					vote on features, publish roadmap, and complete your customer feedback
					loop.
				</Text>

				<Stack direction={{ base: "column", sm: "row", }} mt={"20px"} mb={{ base: 4, md: 8, }} spacing={2}>
					<Box display="inline-flex" rounded="md" shadow="md">
						<Link display="inline-flex" alignItems="center" justifyContent="center" px={5} py={3} border="solid transparent" fontWeight="bold" w="full" rounded="md" bg="brand.600">
							Sign up for free
						</Link>
					</Box>
				</Stack>

			</Box>

		</Flex>
	);
}

export default ImageLeft;
