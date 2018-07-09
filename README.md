# beckifier

An Atom plugin to keep Grandpa Beck happy  

---

This package will automatically:
- replace unnecessary double quotes in Ruby with single quotes
- correct spacing around brackets
- correct spacing around parentheses

#### Example:

```ruby
my_method( bad_spacing  )
  my_hash = {has: bad_spacing, and: "double quotes"}
  puts "These quotes stay: #{my_hash}"
  puts "Won't change strings with ' in them"
end
```

will become:

```ruby
my_method(bad_spacing)
  my_hash = { has: bad_spacing, and: 'double quotes' }
  puts "These quotes stay: #{ my_hash }"
  puts "Won't change strings with ' in them"
end
```

#### Issues:
<br>
Right now interpolation brackets are getting spaces added. Not sure I want that.  
`"#{string}"` becomes `"#{ string }"`
