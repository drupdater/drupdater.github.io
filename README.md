# drupdater.github.io

Hosting for the Drupdater documentation site: <https://drupdater.github.io/>

## The sources are not in this repository

Documentation is written and reviewed in the main repository, beside the code:

**<https://github.com/drupdater/drupdater/tree/main/docs>**

They live there so that a change to a CLI flag, a config key or an addon updates its own
documentation in the same pull request, rather than in a follow-up nobody remembers to
open.

## How publishing works

```text
drupdater/drupdater            docs/ + mkdocs.yml
        │
        │  .github/workflows/docs.yml   (push to main)
        │  mkdocs build --strict
        ▼
drupdater.github.io            gh-pages branch   ← generated HTML, force-pushed
        │
        ▼
https://drupdater.github.io/
```

The site is built with [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
and organised on the [Diátaxis](https://diataxis.fr/) model.

- The **`gh-pages`** branch holds generated HTML only. It is force-pushed on every
  publish, so never commit to it by hand — anything you add there is lost on the next
  build.
- This branch (`main`) holds nothing but this README.

### Repository settings

GitHub Pages for this repository must be configured as **Settings → Pages → Source →
Deploy from a branch → `gh-pages` / `(root)`**.

The push is authenticated by a deploy key: the public half is registered as a write-enabled
deploy key here, and the private half is the `DOCS_DEPLOY_KEY` secret on
`drupdater/drupdater`.

## Editing a page

Every page on the site has an edit link in its top right, pointing at the correct file in
the main repository. Or work locally:

```bash
git clone https://github.com/drupdater/drupdater.git
cd drupdater
pip install -r requirements-docs.txt
make docs-serve      # http://127.0.0.1:8000
```

`make docs-build` runs `mkdocs build --strict`, which fails on broken internal links and
nav entries pointing at files that do not exist. Run it before opening a pull request.
