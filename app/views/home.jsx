import React from 'react';
import {browserHistory} from 'react-router';
import Button from 'react-bootstrap/lib/Button';

export default class Home extends React.Component{
  render() {
    return (
      <div id="home_text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          dolor dui, facilisis ut ante in, tristique sodales risus. Aenean a t
          ristique erat. Quisque ultricies facilisis urna sit amet volutpat.
          Pellentesque faucibus pulvinar mauris vel vulputate. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Curabitur sed lacus purus. Integer vitae purus pulvinar, mattis nibh
          vitae, imperdiet nulla. Maecenas sit amet mauris ac erat vulputate
          posuere.
        </p>
        <p>
          Sed vitae massa rutrum, aliquet nisl sed, laoreet lacus. Sed interdum
          lectus vel sapien fermentum, et ornare arcu pulvinar. Ut lobortis quam
          egestas, pellentesque quam non, scelerisque urna. Morbi tellus lorem,
          rutrum eu mattis nec, sodales sit amet tellus. Nullam id nisi euismod,
          tincidunt ex vitae, finibus erat. Donec fermentum mi ac dolor pharetra
          finibus. Suspendisse venenatis condimentum odio, eu consectetur magna
          rutrum et. Cras imperdiet neque dui, sed....
        </p>
        <div id="links" class="text-center">
          <span>
            <Button onClick={() => {browserHistory.push('/login')}}>
              Login
            </Button>
          </span>
          <span>
            <Button onClick={() => {browserHistory.push('/register')}}>
              Register
            </Button>
          </span>
      </div>
    </div>
    );
  }
};
