import { FacebookService } from 'ngx-facebook';
import { PaginationTableComponent } from './components/tables/pagination/pagination.component';
import { SharedService } from './shared/shared.service';
import { RoutesModule } from './modules/routes/routes.module';
import { BrowserModule } from '@angular/platform-browser';
import {MDBBootstrapModulesPro, ToastModule} from 'ng-uikit-pro-standard';

import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';

import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CssMainComponent } from './components/css/css-main/css-main.component';
import { ComponentsMainComponent } from './components/components/components-main/components-main.component';
import { AdvancedMainComponent } from './components/advanced/advanced-main/advanced-main.component';
import { NavigationMainComponent } from './components/navigation/navigation-main/navigation-main.component';
import { FormsMainComponent } from './components/forms/forms-main/forms-main.component';
import { TablesMainComponent } from './components/tables/tables-main/tables-main.component';
import { ModalsMainComponent } from './components/modals/modals-main/modals-main.component';
import { ExtendedMainComponent } from './components/extended/extended-main/extended-main.component';
import { SectionsMainComponent } from './components/sections/sections-main/sections-main.component';
import { MasksComponent } from './components/css/masks/masks.component';
import { ShadowsComponent } from './components/css/shadows/shadows.component';
import { ButtonsComponent } from './components/components/buttons/buttons.component';
import { CardsComponent } from './components/components/cards/cards.component';
import { DropdownsComponent } from './components/components/dropdowns/dropdowns.component';
import { ListGroupsComponent } from './components/components/list-groups/list-groups.component';
import { PanelsComponent } from './components/components/panels/panels.component';
import { PaginationComponent } from './components/components/pagination/pagination.component';
import { ProgressbarsComponent } from './components/components/progressbars/progressbars.component';
import { TabsPillsComponent } from './components/components/tabs-pills/tabs-pills.component';
import { TagsLabelsBadgesComponent } from './components/components/tags-labels-badges/tags-labels-badges.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationBasicComponent } from './components/components/pagination-basic/pagination-basic.component';
import { PaginationAdvancedComponent } from './components/components/pagination-advanced/pagination-advanced.component';
import { PaginationApiComponent } from './components/components/pagination-api/pagination-api.component';
import { AlertsComponent } from './components/advanced/alerts/alerts.component';
import { CarouselComponent } from './components/advanced/carousel/carousel.component';
import { CollapseComponent } from './components/advanced/collapse/collapse.component';
import { ChartsComponent } from './components/advanced/charts/charts.component';
import { PopoverComponent } from './components/advanced/popover/popover.component';
import { SmoothscrollComponent } from './components/advanced/smoothscroll/smoothscroll.component';
import { StickyContentComponent } from './components/advanced/sticky-content/sticky-content.component';
import { TooltipComponent } from './components/advanced/tooltip/tooltip.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarouselFullpageExampleComponent } from './components/advanced/carousel-fullpage-example/carousel-fullpage-example.component';
import { LineComponent } from './components/advanced/charts/line/line.component';
import { RadarComponent } from './components/advanced/charts/radar/radar.component';
import { BarComponent } from './components/advanced/charts/bar/bar.component';
import { PolarComponent } from './components/advanced/charts/polar/polar.component';
import { PieComponent } from './components/advanced/charts/pie/pie.component';
import { DounghnutComponent } from './components/advanced/charts/dounghnut/dounghnut.component';
import { EasyComponent } from './components/advanced/charts/easy/easy.component';
import { FooterExComponent } from './components/navigation/footer-ex/footer-ex.component';
import { HamburgerComponent } from './components/navigation/hamburger/hamburger.component';
import { MegaMenuComponent } from './components/navigation/mega-menu/mega-menu.component';
import { NavsComponent } from './components/navigation/navs/navs.component';
import { NavbarsComponent } from './components/navigation/navbars/navbars.component';
import { NavigationLayoutComponent } from './components/navigation/navigation-layout/navigation-layout.component';
import { DarkComponent } from './components/navigation/mega-menu/dark/dark.component';
import { LightComponent } from './components/navigation/mega-menu/light/light.component';
import { BlueComponent } from './components/navigation/mega-menu/blue/blue.component';
import { RFNComponent } from './components/navigation/navigation-layout/r-f-n/r-f-n.component';
import { RNFNComponent } from './components/navigation/navigation-layout/r-n-f-n/r-n-f-n.component';
import { INFNComponent } from './components/navigation/navigation-layout/i-n-f-n/i-n-f-n.component';
import { IFNComponent } from './components/navigation/navigation-layout/i-f-n/i-f-n.component';
import { IFTNComponent } from './components/navigation/navigation-layout/i-f-t-n/i-f-t-n.component';
import { INFTNComponent } from './components/navigation/navigation-layout/i-n-f-t-n/i-n-f-t-n.component';
import { FSFNComponent } from './components/navigation/navigation-layout/f-s-f-n/f-s-f-n.component';
import { FSNFNComponent } from './components/navigation/navigation-layout/f-s-n-f-n/f-s-n-f-n.component';
import { HSFNComponent } from './components/navigation/navigation-layout/h-s-f-n/h-s-f-n.component';
import { HSNFNComponent } from './components/navigation/navigation-layout/h-s-n-f-n/h-s-n-f-n.component';
import { AutocompleteComponent } from './components/forms/autocomplete/autocomplete.component';
import { CheckboxComponent } from './components/forms/checkbox/checkbox.component';
import { DatepickerComponent } from './components/forms/datepicker/datepicker.component';
import { FormsComponent } from './components/forms/forms/forms.component';
import { InputsComponent } from './components/forms/inputs/inputs.component';
import { InputGroupsComponent } from './components/forms/input-groups/input-groups.component';
import { InputValidationComponent } from './components/forms/input-validation/input-validation.component';
import { MultiselectComponent } from './components/forms/multiselect/multiselect.component';
import { RadioComponent } from './components/forms/radio/radio.component';
import { SearchComponent } from './components/forms/search/search.component';
import { SelectComponent } from './components/forms/select/select.component';
import { SliderComponent } from './components/forms/slider/slider.component';
import { SwitchComponent } from './components/forms/switch/switch.component';
import { TextareaComponent } from './components/forms/textarea/textarea.component';
import { TimepickerComponent } from './components/forms/timepicker/timepicker.component';
import { BasicComponent } from './components/tables/basic/basic.component';
import { AdditionalComponent } from './components/tables/additional/additional.component';
import { DatatablesComponent } from './components/tables/datatables/datatables.component';
import { EditableComponent } from './components/tables/editable/editable.component';
import { ResponsiveComponent } from './components/tables/responsive/responsive.component';
import { SortComponent } from './components/tables/sort/sort.component';
import { SearchTableComponent } from './components/tables/search/search.component';
import { ModalBasicComponent } from './components/modals/modal-basic/modal-basic.component';
import { ModalAdvancedComponent } from './components/modals/modal-advanced/modal-advanced.component';
import { ModalEventsComponent } from './components/modals/modal-events/modal-events.component';
import { ModalFormsComponent } from './components/modals/modal-forms/modal-forms.component';
import { ModalStylesComponent } from './components/modals/modal-styles/modal-styles.component';
import { BlogComponentComponent } from './components/extended/blog-component/blog-component.component';
import { FlippingCardsComponent } from './components/extended/flipping-cards/flipping-cards.component';
import { MapsComponent } from './components/extended/maps/maps.component';
import { SocialButtonsComponent } from './components/extended/social-buttons/social-buttons.component';
import { SteppersComponent } from './components/extended/steppers/steppers.component';
import { BlogSectionComponent } from './components/sections/blog-section/blog-section.component';
import { ContactSectionComponent } from './components/sections/contact-section/contact-section.component';
import { EcommerceSectionComponent } from './components/sections/ecommerce-section/ecommerce-section.component';
import { FeaturesSectionComponent } from './components/sections/features-section/features-section.component';
import { IntrosSectionComponent } from './components/sections/intros-section/intros-section.component';
import { MagazineSectionComponent } from './components/sections/magazine-section/magazine-section.component';
import { ProjectsSectionComponent } from './components/sections/projects-section/projects-section.component';
import { SocialSectionComponent } from './components/sections/social-section/social-section.component';
import { TeamSectionComponent } from './components/sections/team-section/team-section.component';
import { TestimonialsSectionComponent } from './components/sections/testimonials-section/testimonials-section.component';
import { IntroAppComponent } from './components/sections/intros-section/intro-app/intro-app.component';
import { IntroContactComponent } from './components/sections/intros-section/intro-contact/intro-contact.component';
import { IntroCtaComponent } from './components/sections/intros-section/intro-cta/intro-cta.component';
import { IntroParallaxComponent } from './components/sections/intros-section/intro-parallax/intro-parallax.component';
import { IntroClassicComponent } from './components/sections/intros-section/intro-classic/intro-classic.component';
import { IntroVideoComponent } from './components/sections/intros-section/intro-video/intro-video.component';
import { IntroMinimalisticComponent } from './components/sections/intros-section/intro-minimalistic/intro-minimalistic.component';
import { FbShareComponent } from './components/extended/fb-share/fb-share.component';
import { FbMixedShareComponent } from './components/extended/fb-mixed-share/fb-mixed-share.component';
import { FbShareParametersComponent } from './components/extended/fb-share-parameters/fb-share-parameters.component';
import { FbLikeComponent } from './components/extended/fb-like/fb-like.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CssMainComponent,
    ComponentsMainComponent,
    AdvancedMainComponent,
    NavigationMainComponent,
    FormsMainComponent,
    TablesMainComponent,
    ModalsMainComponent,
    ExtendedMainComponent,
    SectionsMainComponent,
    MasksComponent,
    ShadowsComponent,
    ButtonsComponent,
    CardsComponent,
    DropdownsComponent,
    ListGroupsComponent,
    PanelsComponent,
    PaginationComponent,
    ProgressbarsComponent,
    TabsPillsComponent,
    TagsLabelsBadgesComponent,
    PaginationBasicComponent,
    PaginationAdvancedComponent,
    PaginationApiComponent,
    AlertsComponent,
    CarouselComponent,
    CollapseComponent,
    ChartsComponent,
    PopoverComponent,
    SmoothscrollComponent,
    StickyContentComponent,
    TooltipComponent,
    CarouselFullpageExampleComponent,
    LineComponent,
    RadarComponent,
    BarComponent,
    PolarComponent,
    PieComponent,
    DounghnutComponent,
    EasyComponent,
    FooterExComponent,
    HamburgerComponent,
    MegaMenuComponent,
    NavsComponent,
    NavbarsComponent,
    NavigationLayoutComponent,
    DarkComponent,
    LightComponent,
    BlueComponent,
    RFNComponent,
    RNFNComponent,
    INFNComponent,
    IFNComponent,
    IFTNComponent,
    INFTNComponent,
    FSFNComponent,
    FSNFNComponent,
    HSFNComponent,
    HSNFNComponent,
    AutocompleteComponent,
    CheckboxComponent,
    DatepickerComponent,
    FormsComponent,
    InputsComponent,
    InputGroupsComponent,
    InputValidationComponent,
    MultiselectComponent,
    RadioComponent,
    SearchComponent,
    SelectComponent,
    SliderComponent,
    SwitchComponent,
    TextareaComponent,
    TimepickerComponent,
    BasicComponent,
    AdditionalComponent,
    DatatablesComponent,
    EditableComponent,
    ResponsiveComponent,
    SortComponent,
    PaginationTableComponent,
    SearchTableComponent,
    ModalBasicComponent,
    ModalAdvancedComponent,
    ModalEventsComponent,
    ModalFormsComponent,
    ModalStylesComponent,
    BlogComponentComponent,
    FlippingCardsComponent,
    MapsComponent,
    SocialButtonsComponent,
    SteppersComponent,
    BlogSectionComponent,
    ContactSectionComponent,
    EcommerceSectionComponent,
    FeaturesSectionComponent,
    IntrosSectionComponent,
    MagazineSectionComponent,
    ProjectsSectionComponent,
    SocialSectionComponent,
    TeamSectionComponent,
    TestimonialsSectionComponent,
    IntroAppComponent,
    IntroContactComponent,
    IntroCtaComponent,
    IntroParallaxComponent,
    IntroClassicComponent,
    IntroVideoComponent,
    IntroMinimalisticComponent,
    FbShareComponent,
    FbMixedShareComponent,
    FbShareParametersComponent,
    FbLikeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    MDBBootstrapModulesPro.forRoot(),
    ToastModule.forRoot(),
    RoutesModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({}),
  ],
  providers: [MDBSpinningPreloader, SharedService, FacebookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
