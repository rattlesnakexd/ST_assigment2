# ST_assigment2

First team meeting :

1. Meeting with the sir for clarification of the concepts
2. Deciding the tools and frameworks to be used
3. Dividing the work

Second team meeting :

1. Resolving framework configration problems
2. Resolving gerkin to javascript mapping problems

Third team meeting :

1. Selecting three API test automation scenarios

Task 4)
The testing done by the react storefront team is done in the folder of test in the main git directory. They have done extensive testing for each and every component of this application. For example in the Carousel testing file they are testing carousel arrows to exist. First they are creating a wrapper to mount the carousel div from 'react-storefront/carousel/Carousel'

wrapper = mount(
<Carousel>

<div>child1</div>
<div>child2</div>
</Carousel>,
)

Then they are finding carousel dots and carousel arrows to exist on the page

expect(wrapper.find(CarouselDots)).toExist()
expect(wrapper.find(CarouselArrows).prop('className')).toContain('hideTouchArrows')
