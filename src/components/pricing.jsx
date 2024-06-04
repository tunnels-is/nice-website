'use client'

import {
	Box,
	Stack,
	HStack,
	Heading,
	Text,
	VStack,
	useColorModeValue,
	List,
	ListItem,
	ListIcon,
	Button,
} from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'
import STORE from '../store'


function PriceWrapper(props) {

	return (
		<Box
			mb={4}
			shadow="base"
			borderWidth="1px"
			alignSelf={{ base: 'center', lg: 'flex-start' }}
			borderColor={useColorModeValue('gray.200', 'gray.500')}
			borderRadius={'xl'}>

			<Box py={4} px={12}>
				<Text fontWeight="500" fontSize="2xl">
					{props.Title}
				</Text>
				<HStack justifyContent="center">
					<Text fontSize="3xl" fontWeight="600">
						$
					</Text>
					<Text fontSize="5xl" fontWeight="900">
						{props.Price}
					</Text>
					<Text fontSize="3xl" color="gray.500">
						{props.Per}
					</Text>
				</HStack>
			</Box>
			<VStack
				bg={useColorModeValue('gray.50', 'gray.700')}
				py={4}
				borderBottomRadius={'xl'}>
				<List spacing={3} textAlign="start" px={12}>
					{props.Included?.map(i => {
						return (
							<ListItem>
								<ListIcon as={FaCheckCircle} color="green.500" />
								{i}
							</ListItem>
						)
					})}
				</List>
				<Box w="80%" pt={7}>
					<Button w="full" colorScheme="red" variant="outline">
						{props.Button}
					</Button>
				</Box>
			</VStack>


		</Box>
	)
}

export default function ThreeTierPricing() {
	let subs = STORE.Config.subs
	return (
		<Box py={12}>
			<VStack spacing={2} textAlign="center">
				<Heading as="h1" fontSize="4xl">
					Plans that fit your need
				</Heading>
				<Text fontSize="lg" color={'gray.500'}>
					Start with 14-day free trial. No credit card needed. Cancel at anytime.
				</Text>
			</VStack>

			<Stack direction={{ base: 'column', md: 'row' }} textAlign="center" justify="center" spacing={{ base: 4, lg: 10 }} py={10}>

				{subs.map(s => {
					return (
						<PriceWrapper
							Title={s.Title}
							Price={s.Price}
							Button={s.Button}
							Included={s.Included}
							Per={s.Per}
						/>
					)
				})}

			</Stack>
		</Box>
	)
}
