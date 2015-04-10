# Responsive Test for extjs 4

This is a mockup of a demo I saw given at SenchaCon 2015 by Mitul Bid. In his talk he showed a new theme they were developing and showed how it was responsive. That really caught my attention, and from talking to him afterwards for a short period of time I decided to try to mock something up on how it could be done.

I ended up using a `column` layout, and just giving the columns a default value of `.5`. Then I added a controller that listens for the `resize` event and checks the width of the component. If it is in a certain threshold (750px) I change the `columnWidth` paramter to `1`.

Like I said, it's a very rough mockup to just see if I could get it done. This could be expanded into a plugin or something. But it'd only be useful for earlier (v4) versions of extjs, since 5 offers more options for responsiveness - most notably `responsiveConfig`.

Enjoy!