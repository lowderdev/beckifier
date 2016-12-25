# beckifier

An Atom plugin to keep Grandpa Beck happy  

==================================================================

This package will automatically:
- replace unnecessary double quotes in Ruby with single quotes
- correct spacing around brackets
- correct spacing around parentheses
<br>
<br>

#### Example:
<br>
```
my_method( bad_spacing  )
  my_hash = {has: bad_spacing, and: "double quotes"}
  puts "These quotes stay: #{my_hash}"
  puts "Won't change strings with ' in them"
end
```

will become:

```
my_method(bad_spacing)
  my_hash = { has: bad_spacing, and: 'double quotes' }
  puts "Quotes with interpolation will not change: #{my_hash}"
  puts "Won't change quotes with single quotes either."
end
```
<br>
#### Ideas for the future: ####  
<br>
<br>
Right now running `beckifier: beckify` will replace everything.

I'm planning to split each action into it's own command to:
```
beckifier: quotes
beckifier: brackets
beckifier: parentheses
beckifier: beckify         # does all of the above
```
<br>
#### Contributing:
<br>
Feel free to send me a pull request!
