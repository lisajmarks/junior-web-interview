<!-- # EstateSpace Frontend Development Challenge

Hi! Thank you for your interest in [EstateSpace][g3website]. Our evaluation processes includes an open-ended coding challenge that will be part of your interview. There is not one correct way to approach this challenge. Rather, we would like to see your approach and your creativity in solving the problem.

We appreciate that any coding challenge represents an investment of your time.

# The Challenge

Your challenge is to create a UI following the specified design and using the given [React][react] components.

Feel free to go into detail or keep it simple.

## Tech stack

- [React](https://reactjs.org/)

## Pre-requisites

- NodeJs

## Running the webapp

- `npm install` followed by `npm run dev`.
- This should start the single page web application accessible via http://localhost:5173 that will show all the provided
  [React][react] components (Navbar, CollapsibleSection, Input, Dropdown, etc).

## Requirements

We would like a minimum capability. These are:

- Get it to work with bare minimum UI.
- The code must execute.
- You need to build a UI exactly as provided in the screenshot using the components provided to you in src/App.jsx file
- These components are stateless and accept props. Every component has a list of prop-types describing the props they accept. Your aim should be to reuse these components as much as possible while creating your application.
- The code uses tailwind as CSS framework. You may use tailwind or CSS for styling, whichever you prefer.
- You need to store all the data from the form fields (Inputs and Dropdowns) as you think will be best for maintaining the state.
- For Dropdown fields, you can use any mock data for the dropdown items.
- On clicking “Save”, you should print (or console.log()) all the values in the given structure/format:

```json
{
  eSpaceName,
  companyName,
  subscription,
  owner: {
   name.
   phone,
   email,
  },
  location: {
   street,
   suite,
   city,
   country,
   postalCode,
  }
}
```

Please do not overthink think this or get too wrapped up in making a bullet proof application. This is a basic
challenge. Spending significant amounts of time ensuring production level quality is not required. Rather,
we would like to see your ability to model a UI based on a provided design over production ready, visually
appealing features.

## Prerequisites

1. A basic understanding of source code control, [git][git-scm] is required.
2. You must make your code available via a [GitHub][github] account.
3. You should be familiar with [React][react] components and structuring a UI.

## Getting Started

1. Fork this [repository][repository].
1. Clone the fork to your local machine.
1. Start coding.
1. Commit changes to your fork as you see fit.

## Submission

When you are comfortable with your results, please email your fork to
[support@estatespace.com](mailto:support@estatespace.com). Please keep your emails short and to the point.

Any specific notes or further information you would like to add about your submittal, should be included in the GitHub project.

You are free to use a throwaway GitHub account.

## Evaluations

We realize there are many items to look at when creating an application.
Please do not feel like like you have to do everything.
Use your strengths to your advantage in the code you write.
Give us a heads up by documenting your code to let us know where and why you concentrated on certain items.

As you develop your solution, you may have ideas on other avenues to pursue.
Please feel free to include them inline as documented source or as additional [Common Mark][commonmark] compliant notes in your fork.

- We look for creativity, originality, and a good user experience in your application if that's an area you focused on. -->

## Running the webapp

- `npm install` followed by `npm run dev`.
- This should start the single page web application accessible via http://localhost:5173 that will show the form

## General Approach: 
- I looked at each of the components and reviewed their props and behaviors 
- Open the design in the mock folder and see what changes need to be made
- Use React state to store form field values 
- Use JSON stringify to output data on save button onClick action 
- For general copy strings, store in an array constant at top of file for easy editing
- CSS Approach: 
    - Removed border from const `containerCN`
    - Use grid layout to format each container in the appropriate layout 
    - Add a line to the bottom of the first two  CollapsibleSections 

## Summary of Changes: 
- Remove Nav bar 
- Progress Tracker: 
    - Add “Add New Client” string 
    - Add the following missing props  `onStepClick`, `selectedIndex`, `steps` to Progress Tracker
- Reuse the `<CollapsibleSection>` component three times for the other main sections of the form 
    - Overview Section 
        - Add two `<Dropdown>` components and one `<input>` component 
        - Add the following missing props `onChange`, `options` and `value` to Dropdown 
        - Add the following missing props `onChange`, `placeholder`, and `value` to Input component
    - Similar process applied for Owner Information and Location Information 

## Future Suggestions: 
- Put Tailwind CSS In a dedicated CSS file 
- Add overview fields (eSpaceName, companyName, and subscriptions) to an Overview object instead of being top level fields 
- Add validation where approriate. Examples: postal code and phone numbers 


### License

This project is [MIT licensed][mitlicense].

[g3website]: https://estatespace.com/
[git-scm]: https://git-scm.com/
[github]: https://github.com/
[nodejs]: https://nodejs.org/en/
[ES6]: http://www.ecma-international.org/ecma-262/6.0/
[eslint]: https://eslint.org/
[repository]: https://github.com/GriffinGroupGlobal/junior-web-interview
[react]: https://react.dev/

[commonmark]:https://spec.commonmark.org/]
