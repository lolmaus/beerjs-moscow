# beerjs-moscow

A community project aimed to supplement out Meetup.com group. The first milestone is to build a voting platform to choose a bar.


## Roadmap

> #### Legend
>
> :white_circle: -- not implemented yet, planned  
> :white_circle::grey_question: -- planned but ot sure how to implement  
> :radio_button: -- in progress (leaf) or partially implemented (branch)  
> :black_circle: -- implemented  
> :black_circle::grey_question: -- implemented but some edge cases might be missing  
> :no_entry: -- won't implement, not counted as a missing feature  


### Project structure

* :black_circle: Basic project structure
* :black_circle: ESLint configuration
* :black_circle: Deployment
* :black_circle: Favicon
* :white_circle: Internationalization via [ember-intl](https://github.com/jasonmit/ember-intl)
* :black_circle: Pick an addon for forms
* :white_circle: Material design via [ember-paper](https://miguelcobain.github.io/ember-paper/)
* :white_circle: Analytics
* :white_circle::grey_question: Some kind of abuse prevention


### Main app parts

* :radio_button:  Bars
  * :black_circle: Model
  * :black_circle: Create
  * :black_circle: Read
  * :black_circle: Update
  * :black_circle: Delete
  * :black_circle: Map via [ember-leaflet](http://www.ember-leaflet.com/)
  * :black_circle: Search by name
  * :white_circle: Show map when searching by name

* :white_circle:  Users
  * :white_circle: Model
  * :white_circle: Create
  * :white_circle: Read
  * :white_circle: Update
  * :white_circle: Delete
  * :white_circle: Map via [ember-leaflet](http://www.ember-leaflet.com/)

* :white_circle:  Votes
  * :white_circle: Model
  * :white_circle: Create
  * :white_circle: Read
  * :white_circle: Update
  * :white_circle: Delete
  
* :white_circle: Index
  * :white_circle: Main page with current vote


### Tech debt

* :black_circle: Leverage [ember-changeset-validations](https://github.com/DockYard/ember-changeset-validations) or [ember-changeset-cp-validations](https://github.com/offirgolan/ember-changeset-cp-validations)
* :white_circle: Prevent from visiting routes that require authentication
* :white_circle: uDifferentiate between environment and deploy target
* :white_circle: Tweak FireBase permissions to prevent abuse
* :white_circle: Leverage `ember-concurrency` for async actions, with button statuses


### Tests

* :white_circle: Add Chai via [ember-cli-chai](https://github.com/ember-cli/ember-cli-chai)
* :white_circle: Add Page Object via [ember-cli-page-object](http://ember-cli-page-object.js.org/)
* :white_circle: User acceptance tests


### Organizational

* :white_circle: Move to a GitHub organization
* :white_circle: Protect branches
* :white_circle: Set up milestones via GitHub issues



## Development workflow

Do not push directly into main branches. Submit pull requests.



## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (latest version in 6.x, we'll upgrade to Node 7 when Ember CLI does; [NVM](https://github.com/creationix/nvm) is recommended)
* `npm i -g ember-cli bower yarn`



## :warning: Do not use `npm` and `ember install`

This project uses [Yarn](https://yarnpkg.com/).

* Install Yarn:

        npm i -g yarn
        
    Or update it if you have it already:
    
        npm update -g yarn

* Install this project's npm dependencies with Yarn:

        yarn install

* And here's how you install an Ember addon:

        yarn add -D <addon name>
        ember g <addon name>

    "Unknown blueprint" error message is expected in case the installed addon doesn't want to modify the codebase. Simply ignore the message.



## Installation

* `git clone git@github.com:crowdbrew/crowdbrew-frontend.git`
* `cd crowdbrew-frontend`
* `yarn install`
* `bower install`



## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).



### Code Generators

Make use of the many generators for code, try `ember help generate` for more details



### Running Tests

* `ember test`
* `ember test --server`



### Building

* `ember build` (development)
* `ember build --environment production` (production)



### Deploying

    ember deploy prod



## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
