# protontheme

![](assets/demo.gif)

**protontheme** is a *work-in-progress* [Jekyll](https://jekyllrb.com/) theme based on [Materialize](https://materializecss.com/) that I created to show off my projects and write blogs about them. With other themes, I had to use hacky solutions to include prominent video or html previews and demos of my projects at the top of my page. I felt that a theme tailored for that purpose may give me more advantages in the long run.

My plan is to continually expand this theme with the features I require. Eventually, I want to be able to use it to power a sort-of portfolio site.

**Disclaimer**: This theme is a work in progress which means that it is by no means complete and its look and/or configuration options may change at any time. It is *not* ready for serious use. I mainly host it here to make integration in my GitHub pages easier.

## Installation

### As a remote theme as a GitHub pages site

Add to your `_config.yml`:
```yaml
remote-theme:
    captainproton42/protontheme
```

*You can specifiy a branch, tag or commit by appending an `@` like `captainproton42/protontheme@v0.1.0`. See also the Jekyll Remote Theme [README](https://github.com/benbalter/jekyll-remote-theme#declaring-your-theme).*

### As a remote theme with a Ruby Jekyll site

Add to your `_config.yml`:

```yaml
plugins:
    -jekyll-remote-theme
remote-theme:
    captainproton42/protontheme
```

Add `jekyll-remote-theme` to your `Gemfile` in the plugin section:

```ruby
group :jekyll_plugins do
    gem "jekyll-remote-theme"
end
```

*You can specifiy a branch, tag or commit by appending an `@` like `captainproton42/protontheme@v0.1.0`. See also the Jekyll Remote Theme [README](https://github.com/benbalter/jekyll-remote-theme#declaring-your-theme).*

# Features

## Plugin-less markup

***Disclaimer**: Plugin-less markup functions only on Jekyll 4.0 and above. Since GitHub pages is still using an older version, you will have to add the neccessary site variables to your site's `_config.yml` yourself. For instructions, read [Plugin-less markup on GitHub pages](#plugin-less-markup-on-github-pages).*

The theme's `_config.yml` contains site variables which allow custom markup for pages without the need for plugins (which guarantess compatibility with providers that run Jekyll in safe mdoe e.g. GitHub pages).

### Infoboxes

Infoboxes are nice for including additional information on a topic without interrupting the flow of an article. They are a different color and have a uppercase title. They can be added as follows:

```
{{ site.beginInfoBox }}
{{ site.beginInfoBoxTitle }}
Title of the info box
{{ site.endInfoBoxTitle }}
Content of the info box
{{ site.endInfoBox }}
```

### Figures

Figures can be used to quickly create centered elements on your page. You can also add optional caption which will be automatically numbered. Figures and figure captions support HTML and markdown content. The example below adds a captioned image:

```
{{ site.beginFigure }}
<img width="50%" src='image.png'>
{{ site.beginCaption}}
Figure caption.
{{ site.endCaption }}
{{ site.endFigure }}
```

## Layouts

The layout of a page for a Jekyll theme can be specified in a file's YAML [front matter](https://jekyllrb.com/docs/front-matter/). Currently, *protontheme* only supports a single layout, `page`.

### `page`

Layout that can be used for a blog and/or to show of a project. Allows to add a preview of your project at the top of the page and to choose a page theme.

## `page` Configuration Options

This is a list of all configuration options that can be added to the YAML [front matter](https://jekyllrb.com/docs/front-matter/) of a `page`. They will only affect how Jekyll renders this particular page.

### `title`

The title of the page. Will be rendered as a large the top of the page, before any content.

### `preview-video`

Optional path to a `.mp4` file that will be displayed at the top of the page, below the title but above the content. The video will be autoplayed and looped on mute. This is good for adding a short video preview of your project.

*The path should be relative to the page root (e.g. `assets/video.mp4` if `assets` is in the same directory as your `_config.yml`)*

### `preview-description`

Optional decription for your preview that will be visible below the preview video. Can contain markdown.

### `gh-repo`

Optional. `<user_name>/<repository_name>` of your project's repository. If specified, buttons that will link to your project's source and releases on GitHub will be displayed. (It is currently not possible to only display either one of these buttons.)

### `gh-norelease`

If `true`, the button linking to the GitHub repository's releases page will be omittet. Has no effect if `gh-repo` is not specified.

### `theme`

Specify a *page theme* for this page that will change the appearance of the page's background, buttons, code blocks and info boxes.

Currently available page themes:

| page theme      | Description                                             |
|-----------------|---------------------------------------------------------|
| `blue-sky`      | thick lines in a 45-degree angle with light blue colors |
| `yellow-candy`  | a candy-like background with orange and yellow colors   |
| `red-flames`    | a flame-like background with orange-red colors          |
| `green-meadows` | light green colors and background                       |

*I will probably add more page themes as time progresses.*

### `usemath`

If `true`, [MathJax](https://www.mathjax.org/) will be supported on this page.

## Common Post Options

These options can be specified in the front matter of every post (regardless of layout) and will affect how it is displayed on the home page.

### `thumbnail-image`

An image that will be shown on the post's card on the home page.

### `thumbnail-video`

A video that will be muted and autoplayed on the post's card on the home page. Currently only supports MP4 files.

### `external-url`

If specified, the home page will link to this URL instead of the actual post URL. Use empty posts with this in the front matter to link to external sites.

### `summary`

A short summary that will be displayed as a reveal element in the post's card on the home page.

### `disable-navbar`

If `true`, the navbar will not be displayed on this page.

## Site configuration options

These options will affect *all pages* and can be added to your `_config.yml`.

### `page-theme`

A page theme to use for all pages (see documentation above). Will be overridden by page-specific settings.

### `title`

The title of the web *site*. Will be shown on the navbar (if enabled) on all pages.

### `subtitle`

Will be shown below the title on the `home` page.

### `social`

Social media handles. Currently supports `twitter`, `github`, `itchio` and `reddit`. Example usage:

```YAML
social:
  twitter: captainproton42
  github: captainproton42
  reddit: captainproton42
  itchio: captainproton42
```

### `navbar-links`

Links (and labels) that will be displayed on the right in the navbar. Example usage:

```YAML
navbar-links:
  About me : "/#subtitle"
  Projects: "/#posts"
  Resumé: "resume"
```

## Plugin-less markup on GitHub pages

Since GitHub pages uses a Jekyll version < 3.0, inheriting `_config.yml` from this repository will not work. Copy the following lines and add them anywhere in your site's `_config.yml`:

```YAML
beginInfoBox: "<div markdown='1' class='infobox'>"
endInfoBox: "</div>"
beginInfoBoxTitle: "<div class='infobox-title'>"
endInfoBoxTitle: "</div>"

beginFigure: "<div markdown='1' class='figure'>"
endFigure: "</div>"
beginCaption: "<p markdown='1' class='figure-caption'>"
endCaption: "</p>"
```

Plugin-less markup should then work on your GitHub pages site.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Attributions
The theme is based on [Materialize](https://materializecss.com/) which is available under the terms of the [MIT License](https://opensource.org/licenses/MIT).

The background patterns are powered by [DOODAD.DEV's pattern generator](https://doodad.dev/pattern-generator).
