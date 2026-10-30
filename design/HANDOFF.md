Routes (from the prototype):   / → Home, /posts → posts list (posts-desktop / posts-phone), /posts/:id → one post (post-desktop; Read more → post, ← All posts → back), /contact → Contact, * → 404 (404-desktop)
Components → React files:       PostCard → src/components/PostCard.tsx    Button → src/components/ui/Button.tsx    Tag → src/components/ui/Tag.tsx
Button variants → prop:         variant = 'primary' | 'secondary'
Button layout:                  direction row   gap 10   padding 16 (vertical) 8 (horizontal)   height 44
PostCard layout:                direction column (vertical)   gap 12   padding 16   radius 8 (radius/md)   width 320
Breakpoint change:              phone 1 column(s), desktop 3 columns; header stacked and centered on phone, one row on desktop
Tokens (all ten):
color/primary = #1D4ED8
color/on-primary = #FFFFFF
color/text = #1F2937
color/text-muted = #9CA3AF   (fails 4.5 : 1 on white, fixed in tokens.css, see PR)
color/surface = #FFFFFF
color/border = #D1D5DB
space/2 = 8px
space/4 = 16px
space/6 = 24px
radius/md = 8px