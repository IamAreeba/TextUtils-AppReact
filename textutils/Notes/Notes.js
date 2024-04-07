

//  =============================== 4 video =============================== //
// Write below inside <> </>

/*

      Babel compiles JSX down to React.createElements() calls or proper JS 
      The below code is JSX 
      In react we have 2 components: func and class 
      JSX is syntax extension of JS. It prefers camel case 
      In react if you are using JSX so you have to return only 1 element. But you can use fragment ( <> </>)  
      Why () after return cuz JS put ; by it self which will destroy our app by putting ; 
      React use webpack so we can import anything and it will automatically give funcationality of that file 
      Whatever we write in {} will be resolved 
      JSX IS HTML. We have to change it like replacing className, For, tabIndex, and end every elemet with /.
          This is called as unterminated JSX content which is error 
      If i am making navbar as component so well write like <Navbar /> 
      React jo JSX(HTML) phle se ane vali he usko phle se synatize kardeta he <b>Harry</b>. we wiil see it like
          <b>Harry</b>. Maybe that <b>Harry</b> is entered by any user so we dont want any bug in that. Thats why he  
          treats it as string 

      See the SS for how websites work 
      In SPA we make request at once and it will giva bundle of HTML, CSS, JS. And JS takeover that website.
          Now when you move to another page JS hpopulate the same page via API. Basically i dynamically chabge the 
          content if anyone hover to the next page in the requested website 
      We can save bandwidth using SPA 
      We dont give node module folder to anyone 
        

      
      Making Custom Navbar 
          <nav>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
          </nav>
          
          <div className='img'>
            You can see how default React logo is imported 
          </div>

          <div className="container">
            <h1>Hello {name} </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, vitae corporis commodi ab, earum sit voluptatum aspernatur laborum voluptatem aperiam dolorem natus exercitationem repudiandae recusandae consectetur enim iste. Dignissimos, maiores.</p>
          </div> 
          
*/


//  =============================== 5 video =============================== //
/*
    . Now we are adding links of Bootstrap in public folder in index.html
 
        . The below you have to write in above function
        . let name = 'Areeba'
        . We have changed class and # with /
        . Now when i click on anything after writing Textutils in place of navbar. It will redirect to HomePage why cuz replce # with /
        . We have seen how Bootstrap is added in react proj, how to take components of BS and use in react proj and what things to replace. Like
          class etc
        . We have seen react version.
        . Never use any secret file like passwords, credentials in public folder, cuz it is publically to everyone
        . We will build the app always to host so use npm run buld which is optimized and then deploy it on server.
          This server is only for our development it can't hold more users
        . If we are using func based component so we dont have to import react 

        // Modules
        We use {} when we are not exporting by default and in the next file where i am calling it i have to call it wit the exact name as written in the file
        
*/

  //  =============================== 6 video =============================== //

    /* OBJECT : Discussion on props
      . Props = properties
      . We can make custom components and pass something like values, obj, var so that he can use it inside it and render itself
      . We dont have to import react cuz we are using func based component and inside that we are not using react
      . JS concept : Named and Default Export
      . Make file name extension as .mjs
      . And write this command to run :  "node .\module1.mjs"
      . if use the default eexport and when we are acccessing taht on another file with diff name it will take use that 
        default export
      . Now Understanding Props.
      . For this we make another component. Make comp so that custom comp will be on same folder
      . Make comp with capital letter
      . We only use component tags in App.js. So that we can reuse these components by passing props.
      . If we are reusing the components and we have to change things in that comp we can pass them as props.
      . So now if we dont pass the props in that comp that comp is a blank comp.
      . We are passing props as string it can be an obj, link. If alot of props we can group them in obj and pass obj. And render the value of 
        objs
      . We dont change the comp func text once created we only change props

      . Now discussig proptypes. We have to import it using: impt
      . Proptypes we are using to define the type of that props so in future you cant pass anything else like no
      . We can also set Default Props. If i don't pass the props so use default props
      . we can also use isRequired property. If we set that and is i dont pass as prop and default props is // then this will give error
      . We have learnt propTypes, defaultProps(What value to use if not passing value).
      . Always set default props
      . In Navbar we have only discussed about how to pass and use props


    */