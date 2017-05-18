var getProfilePic = function (username) {
    return 'https://photo.fb.com/' + username;
}

var getProfileLink = function(username) {
    return 'https://www.fb.com/' + username;
}


var getAvatarInfo = function (username) {
    return {
        pic: getProfilePic(username),
        link: getProfileLink(username)
    }
};

getAvatarInfo('daironr');



//React



var profilePic = function() {
    return (
        <img src= {'https://photo.fb.com' + this.props.username} />
    );
}


var getProfileLink = function() {
    return (
        <a href={'https://www.fb/com/' + this.props.username}>
        {this.props.username}
        <a/>
    );
}


var Avatar = function() {
    return (
        <div>
        <ProfilePic
        username={this.props.username} />
        <ProfileLink
        username={this.props.username}/>
        <div/>
    );
}


<Avatar username='daironr' />



// Imperative vs Declarative

var numbers = [4, 2, 3, 6];
var total = 0;

for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}


//Declarative

var numbers =  [4, 2, 3, 6];
numbers.reduce({accumulator, current} => {
    return accumulator + current;
}, 0);



// Unidirectional Dataflow
// Manage state inyour app and the UI will update accordingly

// Explicit Mutations
// State update are largely are done by using setState.state changes are Explicit and clear.

// Just Javascript
// React api is really small. It relies on JS for most things.
//  In Angular we use ng-repeat to create list, IN REACT we use .map.

//MVC
// REACT is the V in MVC
// REACT is all about UI i.e) View
