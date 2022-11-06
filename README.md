# ST_assigment2

First team meeting :

1. Meeting with the sir for clarification of the concepts
2. Deciding the tools and frameworks to be used
3. Dividing the work

Second team meeting :

1. Resolving framework configration problems
2. Resolving gerkin to javascript mapping problems

Third team meeting :

1. Dividing the API testing work
2. Selecting three API test automation scenarios

---

Task 4:
The testing done by the react storefront team is done in the folder of test in the main git directory. They have done extensive testing for each and every component of this application using JEST.JS.

For example in the Carousel testing file they are testing carousel arrows to exist but hidden by default. First they are creating a wrapper to mount the carousel div from 'react-storefront/carousel/Carousel'

wrapper = mount(
"<Carousel>

<div>child1</div>
<div>child2</div>
</Carousel>,
)"

Then they are finding carousel dots and carousel arrows to exist on the page
expect(wrapper.find(CarouselDots)).toExist()
expect(wrapper.find(CarouselArrows).prop('className')).toContain('hideTouchArrows')

Next they are also testing that if the prop is not desktop, then the carousel dots and arrows should not be hidden

it('should not have hidetouchArrows class when arrow prop is not desktop', () => {
wrapper = mount(
<Carousel arrows="all">

<div>child1</div>
<div>child2</div>
</Carousel>,
)

    expect(wrapper.find(CarouselArrows).prop('className')).toBe(null)

})

Here the expect function is expecting the class 'hidetouchArrows' to be null in order to display the arrows

Next there is an example of Search bar testing.

describe('SearchButton', () => {
let wrapper

afterEach(() => {
wrapper.unmount()
})

it('should render children', () => {
wrapper = mount(
<SearchButton>

<div id="test" />
</SearchButton>,
)

    expect(wrapper.find('#test')).toExist()

})

it('should render search icon when children not passed', () => {
wrapper = mount(<SearchButton />)

    expect(wrapper.find(Search)).toExist()

})
it('should spread props on button', () => {
wrapper = mount(<SearchButton spreadprops="test" />)

    expect(wrapper.find(IconButton).prop('spreadprops')).toBe('test')

})
})

Here the wrapper is mounnting the search div and then testing for the search button rendering and testing.

Next we have a test case to test the search drawers of the search bar.

it('should render children', () => {
wrapper = mount(
<SearchDrawer open onClose={() => null}>
<div id="test" />
</SearchDrawer>,
)

    expect(wrapper.find('#test')).toExist()

})

Here they are mounting the search drawer div to wrappper and then testing the search drawer to exist
