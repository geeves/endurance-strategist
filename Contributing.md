

## Code Style and Testing

This is a bit tongue-in-cheek, but be mindful of the code and tests you write. 

### Style

Keep your code straight forward and simple.

* Avoid nested blocks of code.
* IFs inside of IFs? Your code can be better.
* Try not to return a NULL purposely.  Return an empty Map, List, Set, etc.

Don't do this:

    if ([...]) {
        ...lots of nested code...
        if ([...]) {
            ...ugh....
        } else if ([...]) {
            ...oh come on!...
        }
    } else {
        ...does ONE thing? Like a log message, return, or throw exception. STOP
    }

Do this:

    if (![...]) {
        return foo;
    }
    
    ...lots of code with a more reasonable depth
    that probably can still be made better but you get the idea....

 

Avoid this:

    if (list != null && !list.isEmpty()) {
        for (l in list) {
            ...
    }

Should just be:

    for (l in list) {
        ... If list.isEmpty() this just doesn't happen.


Yes there are always exceptions.


### Testing

There should be solid testing. But not to ludicrous lengths.

* The code you test should be simple to test. If you are testing big methods, that big method should be refactored.
* If fixing a bug becomes difficult to pass the tests due to mocks, the originating method is probably too complex to be tested.
* Don't feel obligated test endpoints. What is that? It's just a headache. This is a simple application.
* If you are testing CRUD operations. [Everything you are doing is bad. I want you to know this.](https://www.youtube.com/watch?v=Lbyw0MVbniE)

**You should be testing methods that manipulate, conjure,
add, subtract, multiply, divide data.**
