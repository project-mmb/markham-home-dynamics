<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application structure
- Use the root route for the shared header, footer and Android-style bottom navigation so all content routes retain the same shell.
- Keep static demonstration data and the metadata helper in src/lib/markham-data.ts; no backend or browser persistence is used in this frontend-only prototype.
- Use src/components/markham for shared listing and shell UI, and src/styles.css for semantic visual tokens and layouts.
- Treat listing, pricing, safety and neighbourhood metrics as illustrative, not verified real-world data; mark them accordingly.
